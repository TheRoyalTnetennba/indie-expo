## Component Hierarchy

**AuthFormContainer**
 - AuthForm
 - (modal)

 **NavbarContainer**
  - Navbar
  - AuthFormContainer

 **FooterContainer**
  - Footer

 **CampaignIndexContainer**
  - Navbar
  - Footer
  - AuthForm
  - CampaignIndex
  - CampaignIndexItem

**CampaignDetailContainer**
  - CampaignDetail
  - Perk



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "CampaignIndexContainer" |
| "/campaigns/:campaignId" | "CampaignDetailContainer" |
