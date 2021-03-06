class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Vasil',
            appVersion: '',
            logged: ''
        }
    }

    render() {
        return (
            <>
                <div className="container pt-4">
                    <section className="mb-4" id="foot">
                        <a className="btn btn-link btn-floating btn-lg text-white m-1" id = "Facebook"
                           href="https://www.facebook.com/tues.bg" role="button" data-mdb-ripple-color="white" target="_blank">
                           <i className="fab fa-facebook-f">Facebook</i>
                        </a>

                        <a className="btn btn-link btn-floating btn-lg text-white m-1" id = "Twitter"
                           href="https://twitter.com/search?q=%23elsys&lang=bg" role="button"
                           data-mdb-ripple-color="dark" target="_blank">
                           <i className="fab fa-twitter">Twitter</i>
                        </a>

                        <a className="btn btn-link btn-floating btn-lg text-white m-1" href="https://www.elsys-bg.org/" id = "Google"
                           role="button" data-mdb-ripple-color="dark" target="_blank">
                           <i className="fab fa-google">Google</i>
                        </a>

                        <a className="btn btn-link btn-floating btn-lg text-white m-1" id = "Instagram"
                           href="https://www.instagram.com/tues.bg/" role="button" data-mdb-ripple-color="dark" target="_blank">
                           <i className="fab fa-instagram">Instagram</i>
                        </a>

                        <a className="btn btn-link btn-floating btn-lg text-white m-1" id = "Linkedin"
                           href="https://www.linkedin.com/school/tues/" role="button" data-mdb-ripple-color="dark" target="_blank">
                           <i className="fab fa-linkedin">Linkedin</i>
                        </a>

                        <a className="btn btn-link btn-floating btn-lg text-white m-1"  id = "GitHub" href="https://github.com/kiko1134/ElsysLearn"
                           role="button" data-mdb-ripple-color="white" target="_blank">
                           <i className="fab fa-github">GitHub</i>
                        </a>
                    </section>
                </div>
            </>
        )
    }
}