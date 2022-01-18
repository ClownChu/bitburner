import { NS } from '/../NetscriptDefinitions.js'
import { IGameStage } from '/monica/definitions/IGameStage.js'
import { IProfile } from '/monica/definitions/IProfile.js'

export class Deprecated implements IProfile {
    protected _stage?: IGameStage
    get Stage(): IGameStage | undefined {
        return this._stage
    }

    get CanBeExecuted(): boolean {
        return true
    }

    protected _ns: NS

    protected _maxDepth: number
    protected _maxHacknetNodes: number
    protected _expectedHackenetLevel: number
    protected _expectedHackenetRAM: number
    protected _expectedHackenetCores: number
    protected _maxThreadsDivider: number

    protected _iteratedServers: string[] = []

    constructor (ns: NS) {
        this._ns = ns

        this._maxDepth = this._ns.args.at(1) as number
        this._maxHacknetNodes = this._ns.args.at(2) as number
        this._expectedHackenetLevel = this._ns.args.at(3) as number
        this._expectedHackenetRAM = this._ns.args.at(4) as number
        this._expectedHackenetCores = this._ns.args.at(5) as number
        this._maxThreadsDivider = this._ns.args.at(6) as number
    }

    async Execute(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.CanBeExecuted) {
                reject(`Profile could not be executed in the current state`)
            }

            
            if (!this._ns.scriptRunning(`/monica/profiles/deprecated/hacknet.js`, `home`)) {
                this._ns.exec(
                    `/monica/profiles/deprecated/hacknet.js`, 
                    `home`, 
                    1, 
                    this._maxHacknetNodes, 
                    this._expectedHackenetLevel, 
                    this._expectedHackenetRAM, 
                    this._expectedHackenetCores
                )
            }
    
            this._iteratedServers = []
            this.IterateServersInHost(undefined, 1)

            resolve(true)
        })
    }
    
    IterateServersInHost(hostname: string | undefined, currentDepth: number): void {
        if (currentDepth > this._maxDepth) {
            return
        }
    
        const availableHostnames: string[] = this._ns.scan(hostname)
        for (let i = 0; i < availableHostnames.length; i++) {
            hostname = availableHostnames[i]
            if (hostname === 'home' || hostname === 'stock') {
                continue
            }
    
            this.StartServerHack(hostname, currentDepth)
        }
    }
    
    StartServerHack(hostname: string, currentDepth: number): void {
        const currentHackingLevel = this._ns.getHackingLevel()
        const requiredHackingLevel = this._ns.getServerRequiredHackingLevel(hostname)
    
        if (requiredHackingLevel > currentHackingLevel) {
            return
        }
    
        if (!this._ns.hasRootAccess(hostname)) {
            if (this._ns.fileExists("BruteSSH.exe")) {
                this._ns.brutessh(hostname)
            }

            if (this._ns.fileExists("FTPCrack.exe")) {
                this._ns.ftpcrack(hostname)
            }

            if (this._ns.fileExists("relaySMTP.exe")) {
                this._ns.relaysmtp(hostname)
            }

            if (this._ns.fileExists("HTTPWorm.exe")) {
                this._ns.httpworm(hostname)
            }

            if (this._ns.fileExists("SQLInject.exe")) {
                this._ns.sqlinject(hostname)
            }
    
            try {
                this._ns.nuke(hostname)
            } catch {

            }
        }
    
        if (this._ns.hasRootAccess(hostname)) {
            const scriptUsedRAM = 2.45
            const serverMaxRam = this._ns.getServerMaxRam("home")
            const maxThreads = Math.max(1, Math.floor((serverMaxRam / scriptUsedRAM) / this._maxThreadsDivider))

            if (!this._ns.isRunning(`/monica/profiles/deprecated/slave.js`, `home`, hostname)) {    
                this._ns.exec(
                    `/monica/profiles/deprecated/slave.js`, 
                    `home`,
                    maxThreads, 
                    hostname
                )
            }
        }
        
        if (this._iteratedServers.indexOf(hostname) === -1) {
            this._iteratedServers.push(hostname)
            return this.IterateServersInHost(hostname, currentDepth + 1)
        }
    }    
}