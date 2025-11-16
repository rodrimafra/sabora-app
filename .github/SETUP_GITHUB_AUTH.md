# GitHub Authentication Setup

## Current Status
- ✅ SSH key exists: `~/.ssh/id_rsa`
- ✅ SSH key added to SSH agent
- ✅ Git remote switched to SSH: `git@github.com:rodrimafra/sabora-app.git`
- ⚠️ SSH key needs to be added to GitHub account

## Option 1: Add SSH Key to GitHub (Recommended)

1. Copy your SSH public key:
   ```bash
   cat ~/.ssh/id_rsa.pub
   ```

2. Go to GitHub → Settings → SSH and GPG keys
   - URL: https://github.com/settings/keys

3. Click "New SSH key"
   - Title: "Mac - sabora-app" (or any descriptive name)
   - Key: Paste your public key
   - Click "Add SSH key"

4. Test the connection:
   ```bash
   ssh -T git@github.com
   ```
   You should see: "Hi rodrimafra! You've successfully authenticated..."

## Option 2: Use Personal Access Token with HTTPS

If you prefer HTTPS authentication:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - URL: https://github.com/settings/tokens

2. Generate a new token with `repo` scope

3. Update Git to use the token:
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/rodrimafra/sabora-app.git
   ```

   Or use Git credential helper:
   ```bash
   git config --global credential.helper osxkeychain
   ```
   Then on first push, enter your username and use the token as password.

## Verify Setup

After setting up, test with:
```bash
git fetch origin
git push origin main
```

## For Cursor AI

Cursor AI should now be able to push to GitHub using SSH authentication once the key is added to your GitHub account.

