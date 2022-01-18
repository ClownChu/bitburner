import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    const stock: Stock = new Stock(ns)
    while (true) {
        await stock.Execute()
        await ns.sleep(5 * 1000)
    }
}

class Stock {
    protected _ns: NS;

    protected _maxSharePer = 1
    protected _stockBuyPer = 0.60
    protected _stockVolPer = 0.05
    protected _moneyKeepPercent = 0.25
    protected _minSharePer = 5
    
    constructor (ns: NS) {
        this._ns = ns

        this._ns.disableLog('getServerMoneyAvailable')
    }

    async Execute(): Promise<boolean> {
        const stocks = this._ns.stock.getSymbols().sort((a: string, b: string) => {
            return this._ns.stock.getForecast(b) - this._ns.stock.getForecast(a)
        })

        for (const stock of stocks) {
            const position = this._ns.stock.getPosition(stock)
            if (position[0]) {
                this.SellPositions(stock, position[0])
            }
            this.BuyPositions(stock, position[0])
        }

        return new Promise((resolve) => {
            resolve(true)
        })
    }
    
    BuyPositions(stock: string, currentShares: number): void {
        const maxShares = (this._ns.stock.getMaxShares(stock) * this._maxSharePer) - currentShares
        const askPrice = this._ns.stock.getAskPrice(stock)
        const forecast = this._ns.stock.getForecast(stock)
        const volPer = this._ns.stock.getVolatility(stock)
        const playerMoney = this._ns.getServerMoneyAvailable(`home`)
        
        if (forecast >= this._stockBuyPer && volPer <= this._stockVolPer) {
            const availableMoney = playerMoney - (playerMoney * this._moneyKeepPercent) - (100 * 1000)
            if (availableMoney >= this._ns.stock.getPurchaseCost(stock, this._minSharePer, "Long")) {
                const shares = Math.min(availableMoney / askPrice, maxShares)
                if (shares > 0) {
                    this._ns.stock.buy(stock, shares)
                }
            }
        }      
    }

    SellPositions(stock: string, shares: number): void {
        const forecast = this._ns.stock.getForecast(stock)
        if (forecast < 0.5) {
            this._ns.stock.sell(stock, shares)
        }
    }
}