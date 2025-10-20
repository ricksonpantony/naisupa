#!/bin/bash

# Image cleanup script - Run after confirming Supabase images work
# This script will create a backup and then remove local image folders

echo "🗂️  Creating backup of local images before cleanup..."

# Create backup directory
mkdir -p backup/local-images

# Copy folders to backup
echo "📁 Backing up blog-images..."
cp -r public/blog-images backup/local-images/ 2>/dev/null || echo "blog-images folder not found or empty"

echo "📁 Backing up Gallery..."
cp -r public/Gallery backup/local-images/ 2>/dev/null || echo "Gallery folder not found or empty"

echo "📁 Backing up Images..."
cp -r public/Images backup/local-images/ 2>/dev/null || echo "Images folder not found or empty"

echo "📁 Backing up Team..."
cp -r public/Team backup/local-images/ 2>/dev/null || echo "Team folder not found or empty"

echo "✅ Backup complete! Images saved to backup/local-images/"

echo ""
echo "⚠️  IMPORTANT: Test your website first before running cleanup!"
echo "💡 If images load correctly from Supabase, run:"
echo "   ./cleanup-local-images.sh --confirm"
echo ""

# Only delete if --confirm flag is passed
if [ "$1" = "--confirm" ]; then
    echo "🗑️  Removing local image folders..."
    
    # Remove the folders
    rm -rf public/blog-images
    rm -rf public/Gallery  
    rm -rf public/Images
    rm -rf public/Team
    
    echo "✅ Local image folders removed!"
    echo "📦 Your images are now served from Supabase Storage"
    echo "🔄 This should significantly reduce your bundle size"
else
    echo "🔒 Local folders preserved. Use --confirm flag to delete after testing."
fi