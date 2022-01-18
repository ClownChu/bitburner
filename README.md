<h1 align="center">Bitburner scripts</h1>
<h3 align="center">Scripts for Bitburner game</h3>

<p align="right"><sup>* README.md is still being written</sup></p>

<p align="center">I have just started to play Bitburner, this repository was created to hold all my scripts.</p>
<p align="center">My goal is to get to a point where the scripts can automatically play the game to the fullest.</p>

<hr>

<h2 id="installation" align="center">Installation</h2>

```
git clone https://github.com/ClownChu/bitburner.git
npm install
npm run defs
```

<hr>

<h2 id="typescript" align="center">TypeScript</h2>

<h3 id="available_commands">Available Commands:</h3>

<ul>
    <li>
        For autocompile run <code>npm run ts:watch</code>
    </li>
    <li>
        To build run <code>npm run ts:build</code>
    </li>
    <li>
        For lint run <code>npm run ts:lint</code>
    </li>
</ul>

<p>Builds <code>.js</code> files inside <code>/dist</code> folder</p>

<hr>

<h2 id="running_monica" align="center">Running Monica</h2>
<h3 align="center">*** In Bitburner terminal ***</h3>

<p><code>Monica</code> is the name given to the "to-be" Bitburner bot.</p>

<ul>
    <li>
        <code>run /monica/Monica.js <i>[profile+] [serverSearchMaxDepth+] [numOfHacknetNodes+] [hacknetNodesLevel+] [hacknetNodesRAM+] [hacknetNodesCores+] [slaveMaxThreadsDivider+]</i></code>
        <br />
        Available <code>profile</code> values:
        <ul>
            <li><b>Deprecated</b> - Backward compatibility scripts with older version of this repo.</li>
        </ul>
        <hr />
        <b>Sample:</b> <code>run /monica/Monica.js deprecated 15 35 200 64 16 35</code>
    </li>
</ul>

<hr>

<h2 id="todos" align="center">TODOs</h2>

<h3 id="pending">Pending</h3>

```objc
- [ ] Create "Hacker", "Criminal", and "Broker" profiles
- [ ] Create initial profile stages
- [ ] Create scripts to manage "home" and additional "purchasable" servers (can you believe you can upgrade home and new servers?!!)
- [ ] TODOs in code // https://github.com/ClownChu/bitburner/search?q=TODO+%3A
```

<p align="right"><sup>* Not in order of priority</sup></p>

<h3 id="completed">Completed</h3>

```objc
- [x] Create "Deprecated" profile to use during profiles development
- [x] Play with the `Stock Market`
- [x] Use TypeScript
- [x] Use NS scripts
- [x] Remove Visual Studio Code extension workaround
- [x] Fix base64 encoding in "filePush" of Visual Studio Code extension (https://github.com/hexnaught/vscode-bitburner-connector)
- [x] Create script capable of finding and attacking servers
- [x] Create script to hack servers taking into account the security and money available
- [x] Create scripts to manage Hacknet Nodes
- [x] Create Monica (assistant)
- [x] Create script deployer (using VS Code extension vscode-bitburner-connector)
```

<h2 id="references" align="center">References</h2>

<ul>
    <li>
        Scripts are using TypeScript based on <a href="https://github.com/SlyCedix/bitburner-typescript-template" target="_blank">SlyCedix/bitburner-typescript-template</a> (Read <a href="https://github.com/SlyCedix/bitburner-typescript-template#how-to-use-this-template">How to use the tempalte</a> for more information about template usage and <code>watcher.js</code>)
    </li>
    <li>
        <code>/monica/deprecated/stock.js</code> was based on <a href="https://www.reddit.com/r/Bitburner/comments/rn7l84/stock_script_to_end_your_financial_problems/" target="_blank">ferrus_aub's reddit post</a>
    </li>
</ul>

<hr>