import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <fieldset class="first-page flex">
                        <h2 class="center" id="cap-header">Personal Details</h2>
                        <h3 class="center">Tell us something more about you</h3>
                        <input class="center input" type="text" placeholder="First Name" />
                        <input class="center input" type="text" placeholder="Last Name" />
                        <input class="center input" type="text" placeholder="Phone" />
                        <button class="center next-button" type="button">Next</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Form;