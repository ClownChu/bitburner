import { BasicHGWOptions, NS } from '@ns'
import { ProcessesHelper } from '/helpers/Processes.js'

export async function main(ns : NS) : Promise<void> {
    const slave: Slave = new Slave(ns)
    while (true) {
        await slave.Execute()
    }
}

class Slave {
    protected _ns: NS;

    protected _threadCount: number;
    protected _hostname: string;
    
    constructor (ns: NS) {
        this._ns = ns

        this._threadCount = ProcessesHelper.GetProcessThreadCount(this._ns, `/monica/profiles/deprecated/slave.js`)
        if (this._ns.args.length > 0) {
            this._hostname = this._ns.args.at(0) as string
        } else {
            this._hostname = this._ns.getHostname()
        }
    }

    async Execute(): Promise<boolean> {
        const maxSecurity = this._ns.getServerMinSecurityLevel(this._hostname) + (5 * this._ns.getServerMinSecurityLevel(this._hostname))
        const minMoneyAvailable = this._ns.getServerMaxMoney(this._hostname) * 0.75
    
        if (this._ns.getServerSecurityLevel(this._hostname) >= maxSecurity) {
            await this._ns.weaken(
                this._hostname, { 
                threads: this._threadCount 
            } as BasicHGWOptions)
        } else if (this._ns.getServerMoneyAvailable(this._hostname) < minMoneyAvailable) {
            await this._ns.grow(
                this._hostname, { 
                threads: this._threadCount 
            } as BasicHGWOptions)
        } else { 
            await this._ns.hack(
                this._hostname, { 
                threads: this._threadCount 
            } as BasicHGWOptions)
        }

        return new Promise((resolve) => {
            resolve(true)
        })
    }
}