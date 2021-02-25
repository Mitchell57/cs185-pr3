import './style.css';

function Textdata() {
    return(
        <div>
            <body>
                <div class="form">
                    <form>
                        <label for="fname">First Name</label><br/>
                        <input type="text" id="fname" name="fname"/>

                        <br/>

                        <label class="form-field" for="lname">Last Name</label>
                        <br/>
                        <input class="form-field" type="text" id="lname" name="lname"/>

                        <br/>
                        <br/>
                        <label for="gender">Gender</label>
                        <br/>

                        <input type="radio" id="male" name="gender" value="male"/>
                        <label for="male">Male</label>
                        <br/>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label for="female">Female</label>
                        <br/>
                        <input type="radio" id="other" name="gender" value="other"/>
                        <label for="other">Other</label>

                        <br/>
                        <br/>

                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </body>
        </div>
    )
}
export default Textdata


