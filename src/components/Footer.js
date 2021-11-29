import React, { Component } from 'react'

class Footer extends Component {
    
    render() {

        // You will get all the props in 'this.props'
        console.log('Footer', this.props)
        
        const {lang} = this.props
        let text = ''
        if (lang == 'en') {
            text = 'Hello'
        }
        else if (lang == 'es') {
            text = 'Hola'
        }

        return (
            <div>
                {text}
            </div>
        )
    }
}

export default Footer