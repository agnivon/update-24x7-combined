import sgMail from '@sendgrid/mail';

const sendMail  = function (email, query) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'snoffice2012@gmail.com', // Change to your recipient
        from: 'agnivon@gmail.com', // Change to your verified sender
        subject: `Query from ${email}`,
        html: `${query}`,
    }
    return sgMail.send(msg)
}

export default sendMail;