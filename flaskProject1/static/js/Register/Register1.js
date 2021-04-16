class Register1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div class="form-group">
                        <label for="Fullname">Full name</label>
                        <input name="fullname" class="form-control" id="inputFullName" aria-describedby="emailHelp" placeholder="Enter full name"/>
                        <small id="fullName" class="form-text text-muted">Please enter your full name(First name and Last name)</small>
                </div>

                <div class="form-group">
                        <label for="InputEmail">Email address</label>
                        <input name="email" class="form-control" id="InputEmail"  placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group">
                    <label for="InputPassword">Password</label>
                    <input type="password" name="password1" class="form-control" id="InputPassword" placeholder="Password"/>
                </div>

                    <div class="form-group">
                    <label for="InputPassword2">Repeat Password</label>
                    <input type="password" name="password2" class="form-control" id="InputPassword2" placeholder="Repeat Password"/>

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </>
        )
    }
}