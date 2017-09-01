# IndieExpo

[Live link][Live]

## Overview

A single-page web application inspired by Indiegogo. Users can create accounts, log in,
launch a fundraising campaign, search for campaigns, view and contribute to campaigns, and buy perks. 

<p align="center">
<img src ="/docs/screenshots/home.png">
</p>

## Technologies

IndieExpo was built using the following technologies:

- [ ] HTML5 (so you can see things)
- [ ] CSS3 (so the things you see will have pretty colors)
- [ ] JavaScript (so you can interact with the colorful and definitely visible things)
- [ ] jQuery (so the server will hear of your interactions)
- [ ] Ruby On Rails (so that your interactions might have consequences)
- [ ] React (so that those consequences might affect the things you see without having to reload all the things)
- [ ] Redux (so that a single, immutable record of your interactions might be kept and elegantly shared amongst the other things)
- [ ] PostgreSQL (so that the record of interactions might survive the cataclysmic event of a server restart)
- [ ] Go + Gorilla mux (for sending emails, repo [here][emailserver])
- [ ] Heroku (hosting)
- [ ] Cloudinary (CDN)

## Features

Users can securely create and log into accounts via the signup and login modals.
The passwords are hashed and salted with BCrypt, the output of which is stored in
the PostgreSQL database. There is also a guest account for people in a hurry.

<p align="center">
<img src ="/docs/screenshots/signup.png">
</p>

Users can also create new fund-raising campaigns.

<p align="center">
<img src ="/docs/screenshots/create.png">
</p>

This was one of the more challanging aspects of the development process.
Users must be able to add an arbitrary number of perks to a given campaign
to encourage others to contribute to the campaign. For each perk, users
must also be able to upload a photo, and regardless of how many perks they
add, the scrollspy navigation highlighter must still know that they are on
the 'Perks' section of the form. To do this in a sane, dry manner, I created
a subcomponent with it's own state and file uploader.
``` javascript
class PerkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      image_url: '',
    };
    this.cloudinaryPreset = 'indieexpo';
    this.cloudinaryURL = 'https://api.cloudinary.com/v1_1/dy4gcvjff/image/upload';
    this.updatePerk = this.updatePerk.bind(this);
    this.updateParent = this.props.updateParent.bind(this);
  }
```
Upon invocation, the subcomponent was passed a method, updateParent, through its
props. This method, when invoked would trigger the handlePerk method on the parent
component, which would update the perks slice of local state with the appropriate
information.
``` javascript
  handlePerk(idx, newPerkSlice) {
    const newPerks = Object.assign(this.state.perks);
    newPerks[idx] = Object.assign(newPerkSlice);
    this.setState({ perks: newPerks });
  }
```
After a user has launched a campaign, they and others can view them, either
through a direct link, the navigation search bar, or via one of the home page
or index sliders.

<p align="center">
<img src ="/docs/screenshots/show.png">
</p>

If someone visiting the campaign show page is interested in learning more about
the user and their other campaigns, they can click the link to view their profile.

<p align="center">
<img src ="/docs/screenshots/profile.png">
</p>

If a users wishes to send a message to me via one of the footer links, they simply
have to fill out the very brief form and click send. The site then makes an AJAX
post to a Google Cloud Compute instance, which runs a minimal Go server. The server
then processes the request, and sends me an email via the gmail smtp servers:

``` go
func SendEmail(w http.ResponseWriter, r *http.Request) {
	body := r.FormValue("Message")
	from := FromEmail
	pass := EmailPass
	to := ToEmail

	msg := "From: " + from + "\n" +
		"To: " + to + "\n" +
		"Subject: " + "IndieExpo is awesome" + "\n\n" +
		body
	err := smtp.SendMail("smtp.gmail.com:587",
		smtp.PlainAuth("", from, pass, "smtp.gmail.com"),
		from, []string{to}, []byte(msg))

	if err != nil {
		log.Printf("smtp error: %s", err)
		return
	}
	log.Print("Email was sent")
}
```

[Live]: https://www.indieexpo.co
[emailserver]: https://github.com/TheRoyalTnetennba/email-server

