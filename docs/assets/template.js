function getHead() {
    document.write(`
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="assets/favicon.ico" />
        <meta charset="utf-8" />
        <Title>BLARG! Systems</Title>
        <meta content="BLARG! Systems" property="og:title" />
        <meta content="Here at BLARG! Systems, we dare to challenge the next generation of programming. Our new compiled language, BLARG!, pushes toward meeting modern expectations in programming." property="og:description" />
        <meta content="https://blargsys.com/" property="og:url" />
        <meta content="https://blargsys.com/assets/logo.png" property="og:image" />
        <meta content="#4e6ab8" data-react-helmet="true" name="theme-color" />
    `)
}

function getHeader() {
	document.write(`
		<header>
            <div class="titlebar">
                <a href="/" aria-hidden="true"><img src="assets/logo.png" /></a>
                <h1>BLARG! Systems
                    <br> 
                    <i>Approaching expectations.</i>
                </h1>
            </div>
            <nav>
                <ul class="navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href="/objectives">Weekly Objectives</a></li>
                    <li><a href="/journals">Journals</a></li>
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
            <p>Copyright &copy; 2023, BLARG! Systems. All rights reserved.</p>
        </footer>
    `)
}