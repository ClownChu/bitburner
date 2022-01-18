import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    const hacknet: Hacknet = new Hacknet(ns)
    await hacknet.Execute()
}

class Hacknet {
    protected _ns: NS;

    protected _maxNodes: number;
    protected _maxLevel: number; 
    protected _maxRAM: number;
    protected _maxCores: number;
    
    constructor (ns: NS) {
        this._ns = ns

        this._maxNodes = this._ns.args.at(0) as number
        this._maxLevel = this._ns.args.at(1) as number
        this._maxRAM = this._ns.args.at(2) as number
        this._maxCores = this._ns.args.at(3) as number
    }

    async Execute(): Promise<boolean> {
        this.PurchaseNodes()

        for (let i = 0; i < this._ns.hacknet.numNodes(); i++) {
            this.UpgradeNodeLevel(i)
            this.UpgradeNodeRAM(i)
            this.UpgradeNodeCores(i)
        }

        return new Promise((resolve) => {
            resolve(true)
        })
    }

    PurchaseNodes(): void {
        while (this._ns.hacknet.numNodes() < this._maxNodes) {
            if (this._ns.hacknet.getPurchaseNodeCost() > this._ns.getServerMoneyAvailable("home")) {
                break
            }
            const nodeId = this._ns.hacknet.purchaseNode()
            this._ns.tprint("    PURCHASED HACKNET NODE #" + nodeId)
        }
    }

    UpgradeNodeLevel(nodeId: number): void {
        let node = this._ns.hacknet.getNodeStats(nodeId)
        while (node.level < this._maxLevel) {
            if (this._ns.hacknet.getLevelUpgradeCost(nodeId, 1) > this._ns.getServerMoneyAvailable("home")) {
                break
            }
            
            this._ns.hacknet.upgradeLevel(nodeId, 1)
            node = this._ns.hacknet.getNodeStats(nodeId)
        }
    }

    UpgradeNodeRAM(nodeId: number): void {
        let node = this._ns.hacknet.getNodeStats(nodeId)
        while (node.ram < this._maxRAM) {
            if (this._ns.hacknet.getRamUpgradeCost(nodeId, 1) > this._ns.getServerMoneyAvailable("home")) {
                break
            }
            
            this._ns.hacknet.upgradeRam(nodeId, 1)
            node = this._ns.hacknet.getNodeStats(nodeId)
        }
    }

    UpgradeNodeCores(nodeId: number): void {
        let node = this._ns.hacknet.getNodeStats(nodeId)
        while (node.ram < this._maxCores) {
            if (this._ns.hacknet.getCoreUpgradeCost(nodeId, 1) > this._ns.getServerMoneyAvailable("home")) {
                break
            }
            
            this._ns.hacknet.upgradeCore(nodeId, 1)
            node = this._ns.hacknet.getNodeStats(nodeId)
        }
    }
}