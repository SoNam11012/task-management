# Setting Up MongoDB Environment Variables in Vercel

Follow these steps to add your MongoDB connection details to your Vercel project:

## Step 1: Log in to Vercel

Go to [Vercel](https://vercel.com) and log in to your account.

## Step 2: Select Your Project

Select the `task-management` project from your dashboard.

## Step 3: Go to Project Settings

Click on the "Settings" tab at the top of the project page.

## Step 4: Navigate to Environment Variables

In the left sidebar, click on "Environment Variables".

## Step 5: Add the Following Environment Variables

Add each of these environment variables one by one:

1. **Variable Name**: `MONGODB_URI`  
   **Value**: `mongodb+srv://mongouser:root%40123@cluster0.q8xi6kc.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0`

2. **Variable Name**: `MONGODB_DB_NAME`  
   **Value**: `task`

3. **Variable Name**: `MONGODB_COLLECTION_NAME`  
   **Value**: `TT`

## Step 6: Select the Environments

For each variable, make sure to select all environments where it should be available:
- Production
- Preview
- Development

## Step 7: Save and Deploy

Click "Save" to save your environment variables.

Then redeploy your application by going to the "Deployments" tab and clicking "Redeploy" on your latest deployment.

## Important Security Notes

1. Your MongoDB connection string contains sensitive information. It's stored securely in Vercel but should not be shared publicly.

2. The commented-out connection string in your configuration is preserved for reference but will not be used by the application.

3. If you need to change your MongoDB password in the future, remember to update this environment variable.
