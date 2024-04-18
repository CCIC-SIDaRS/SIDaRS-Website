function getHead() {
    document.write(`
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="assets/favicon.ico" />
        <meta charset="utf-8" />
        <Title>SIDaRS</Title>
        <meta content="SIDaRS" property="og:title" />
        <meta name="description" content="The Sophisticated Intrusion Detection and Response System." />
        <meta name="keywords" content="SIDaRS, Network, Intrusion, Detection, Security, Cyber, Management" />
        <meta name="author" content="SIDaRS Team">
        <meta property="og:title" content="SIDaRS" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://https://ccic-sidars.github.io/SIDaRS-Website/" />
        <meta property="og:image" content="https://https://ccic-sidars.github.io/SIDaRS-Website/assets/logo.png" />
        <meta property="og:description" content="The Sophisticated Intrusion Detection and Response System." />
        <meta name="theme-color" content="#3dded3">
    `)
}

function getHeader() {
	document.write(`
		<header>
            <div class="titlebar">
                <a href="/SIDaRS-Website/" aria-hidden="true"><img src="assets/logo.png" /></a>
                <h1>SIDaRS
                    <br> 
                    <i>Sophisticated Intrusion Detection and Response.</i>
                </h1>
            </div>
            <nav>
                <ul class="navbar">
                    <li><a href="/SIDaRS-Website/">Home</a></li>
                    <li><a href="/SIDaRS-Website/weeklylogs">Weekly Logs</a></li>
                    <li><a href="/SIDaRS-Website/timeline">Timeline</a></li>
                    <li><a href="/SIDaRS-Website/repositories">Repositories</a></li>
                    <li><a href="/SIDaRS-Website/bibliography">Bibliography</a></li>
                </ul>
            </nav>
        </header>
	`)
}


function getFooter() {
    document.write(`
        <footer>
            <p>Copyright &copy; 2024, SIDaRS. All rights reserved.</p>
        </footer>
    `)
}