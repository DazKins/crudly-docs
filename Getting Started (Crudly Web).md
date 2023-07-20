# Getting Started

The following guide will talk you through setting up your first project and table using the Crudly web application.

Note that the UI screenshots here could be subject to change, but the general process should remain the same. I will do my best to keep the screenshots up to date.

## Overview

We're going to setup a system for a pet grooming shop called "Perfect Pets". We'll need to store details for both the pets and their owners.

## Creating the Project

We'll start by creating a project called "Perfect Pets":

<img src="./.media/projects-create-new-project.png" width="800">

<img src="./.media/projects-create-perfect-pets.png" width="800">

<img src="./.media/projects-perfect-pets-created.png" width="800">

As detailed in the popup, the project key and project ID MUST be kept somewhere securely. You will not be able to retrieve the project key again after closing this dialogue.

## Creating the tables

Now that we have a project, we can create our first table. We'll start with the "customer" table.

<img src="./.media/project-perfect-pets-create-table.png" width="800">

All Crudly tables come with an `id` field, so we can just add a field for the customer's name:

<img src="./.media/perfect-pets-customer-table-creation.png" width="800">

After completing this step we should see the `customer` table created successfully:

<img src="./.media/perfect-pets-customer-table.png" width="800">

Let's go back to the project screen (by clicking "Perfect Pets" again on the left hand navbar) and create the `pet` table.

We'll add a field for pet's name, date of birth and an ID to link the pet to the customer that we'll call `ownerId`:

<img src="./.media/perfect-pets-pet-table-creation.png" width="800">

And navigating back to the project screen we should now see both tables present:

<img src="./.media/perfect-pets-tables-created.png" width="800">

Now we've finished creating our tables we are ready to start using them in our applications!
