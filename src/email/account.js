const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMessage = (email, name) => {
    sgMail.send({
        to: email,
        from: 'info@myextrasheet.com', 
        subject: 'Welcome',
        text: `hi ${name} welcome to the extrasheet community`

    })
   
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'support@myextrasheet.com', 
        subject: 'Delete Account',
        text: `hi ${name} we want to know why you delete your accout kindly reach out to us @myextrasheet.com`
        
    })
  
} 


module.exports = {
    sendWelcomeMessage,
    sendCancelEmail
}

