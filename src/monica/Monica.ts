import { NS } from '@ns'
import { Deprecated } from '/monica/profiles/hacker/deprecated.js'
import { IProfile } from '/monica/definitions/IProfile.js'
import { Hacker } from '/monica/profiles/hacker/hacker.js'

export async function main(ns : NS) : Promise<void> {
    const monica = new Monica(ns)

    while (true) {
        await monica.Start(
            ns.args.at(0) as string
        )
        await ns.sleep(5 * 1000)
    }
}

class Monica {
    protected _ns: NS

    constructor(ns : NS) {
        this._ns = ns

        this._ns.disableLog('disableLog')
        this._ns.disableLog('sleep')
        
        this._ns.tprint(" ")
        this._ns.tprint("                                     ▄▄                 ")
        this._ns.tprint("▀████▄     ▄███▀                     ██                 ")
        this._ns.tprint("  ████    ████                                          ")
        this._ns.tprint("  █ ██   ▄█ ██   ▄██▀██▄▀████████▄ ▀███  ▄██▀██ ▄█▀██▄  ")
        this._ns.tprint("  █  ██  █▀ ██  ██▀   ▀██ ██    ██   ██ ██▀  ████   ██  ")
        this._ns.tprint("  █  ██▄█▀  ██  ██     ██ ██    ██   ██ ██      ▄█████  ")
        this._ns.tprint("  █  ▀██▀   ██  ██▄   ▄██ ██    ██   ██ ██▄    ▄█   ██  ")
        this._ns.tprint("▄███▄ ▀▀  ▄████▄ ▀█████▀▄████  ████▄████▄█████▀▀████▀██▄")
        this._ns.tprint("                          🤖                           ")
        this._ns.tprint(" ")
    }

    /**
     * TODO : Monica should choose the profile and use multiple
     */
    async Start(profileType: string): Promise<boolean> {
        let profile: IProfile = new Deprecated(this._ns)
        switch (profileType) {
            case "hacker":
                profile = new Hacker()
                break
            case "criminal":
                break
            case "broker":
                break
        }

        return profile.Execute()
    }
}