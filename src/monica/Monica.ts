import { NS } from '@ns'
import { IProfile } from '/monica/definitions/IProfile.js'
import { Hacker } from '/monica/profiles/hacker/hacker.js'

export async function main(ns : NS) : Promise<void> {
    const monica = new Monica(ns)
    monica.LoadProfile(
        ns.args.at(0) as string
    ).then((profile) => {
        profile.Execute().then((result) => {
            ns.tprint(`Profile execution result: ${result}`)
        })
    })
}

class Monica {
    protected _ns: NS

    constructor(ns : NS) {
        this._ns = ns
        
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

    LoadProfile(profileType: string): Promise<IProfile> {
        let profile: IProfile
        switch (profileType) {
            case "hacker":
                profile = new Hacker()
                break
            case "criminal":
                break
            case "broker":
                break
        }

        return new Promise((resolve, reject) => {
            if (profile === undefined) {
                reject(
                    new Error(`Profile could not be identified by '${profileType}'`)
                )
            }
            resolve(profile)
        })
    }
}