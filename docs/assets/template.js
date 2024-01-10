function getHead() {
    document.write(`
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="assets/favicon.ico" />
        <meta charset="utf-8" />
        <Title>SIDaRS</Title>
        <meta content="SIDaRS" property="og:title" />
        <meta content="The Sophisticated Intrusion Detection and Response System." property="og:description" />
        <meta content="https://https://ccic-sidars.github.io/SIDaRS-Website/" property="og:url" />
        <meta content="https://https://ccic-sidars.github.io/SIDaRS-Website/assets/logo.png" property="og:image" />
        <meta content="#4e6ab8" data-react-helmet="true" name="theme-color" />
    `)
}

function getHeader() {
	document.write(`
		<header>
            <div class="titlebar">
                <a href="/" aria-hidden="true"><img src="assets/logo.png" /></a>
                <h1>SIDaRS
                    <br> 
                    <i>Sophisticated Intrusion Detection and Response.</i>
                </h1>
            </div>
            <nav>
                <ul class="navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href="/timeline">Timeline</a></li>
                    <li><a href="/repositories">Repositories</a></li>
                    <li><a href="/bibliography">Bibliography</a></li>
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