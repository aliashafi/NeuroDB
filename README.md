## README

## NeuroDB

#### Overview: 
NeuroDB is a database tool to help researchers studying intracranial Electrocorticography (ECoG) manage patient meta data and research related information. The project idea was inspired by the Chang Lab at UCSF, a neurosurgery lab interested in determining the basic mechanisms that underlie our ability to create and produce speech. Similar to many academic labs, the Chang Lab current mechanism for storing patient and clinical trial information is through numerous excel and google sheets. This makes it particularily hard to (1) search for patients that fall under specific criteria, (2) easily gather meta data and stats on a given patient population, and (3) keep track of experimental trial notes across studies. This database hopes to be a tool of use for searching, sharing, storing, organizing and gathering patient/subject data across studies and within the lab.

### Challenges: 
*1. Database Entry*
It is very tedious to fill out every form for every patient any time someone is enrolled in a study. Creating a user-friendly interface that is both easy to user and quick will be a big challenge. 

*2. User Auth* 
Unlike the basic user auth that we have learned in this course, we will need a more complex flow for user authentication. Not all users will have access to edit/update/share. This means we need different privledges when a user signs up for the database. Ideally, we would like to have admin `approve` or `deny` any request to create a account on the database. Once the request is accepted, the user who signed up for the database will receive an email of approval. 

