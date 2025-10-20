#!/bin/bash

# Cleanup script for removing unused local images after Supabase migration
# All images are now served from Supabase CDN

echo "🧹 Cleaning up unused local images..."
echo "All images are now in Supabase storage"
echo ""

# Check if backup exists
if [ ! -d "backup/local-images" ]; then
    echo "⚠️  Warning: No backup directory found at backup/local-images"
    echo "Creating backup first for safety..."
    mkdir -p backup/local-images
fi

# Function to show directory size
show_size() {
    if [ -d "$1" ]; then
        du -sh "$1" 2>/dev/null || echo "0B"
    else
        echo "Directory not found"
    fi
}

echo "Current local image sizes:"
echo "├── public/Images: $(show_size 'public/Images')"
echo "├── public/Team: $(show_size 'public/Team')"
echo ""

# Backup Images if not already backed up
if [ -d "public/Images" ] && [ ! -d "backup/local-images/Images" ]; then
    echo "📦 Backing up public/Images to backup/local-images/Images..."
    cp -r public/Images backup/local-images/
    echo "✅ Images backed up"
fi

# Backup Team if not already backed up  
if [ -d "public/Team" ] && [ ! -d "backup/local-images/Team" ]; then
    echo "📦 Backing up public/Team to backup/local-images/Team..."
    cp -r public/Team backup/local-images/
    echo "✅ Team photos backed up"
fi

echo ""
echo "🔍 Checking what will be removed:"
echo ""

if [ -d "public/Images" ]; then
    echo "📁 public/Images/ will be removed:"
    ls -1 public/Images/ | head -10
    if [ $(ls -1 public/Images/ | wc -l) -gt 10 ]; then
        echo "   ... and $(( $(ls -1 public/Images/ | wc -l) - 10 )) more files"
    fi
    echo ""
fi

if [ -d "public/Team" ]; then
    echo "📁 public/Team/ will be removed:"
    ls -1 public/Team/ | head -10
    if [ $(ls -1 public/Team/ | wc -l) -gt 10 ]; then
        echo "   ... and $(( $(ls -1 public/Team/ | wc -l) - 10 )) more files"
    fi
    echo ""
fi

echo "⚠️  This will remove local image directories (safely backed up)"
echo "✅ All images are available in Supabase:"
echo "   - Images: https://xvdznzsozebtzqsczked.supabase.co/storage/v1/object/public/images/"
echo "   - Team: https://xvdznzsozebtzqsczked.supabase.co/storage/v1/object/public/Team/"
echo ""
read -p "Continue with cleanup? (y/N): " confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ Cleanup cancelled"
    exit 0
fi

echo ""
echo "🗑️  Removing local image directories..."

# Remove Images directory
if [ -d "public/Images" ]; then
    rm -rf public/Images
    echo "✅ Removed public/Images/"
fi

# Remove Team directory  
if [ -d "public/Team" ]; then
    rm -rf public/Team
    echo "✅ Removed public/Team/"
fi

echo ""
echo "✨ Cleanup complete!"
echo ""
echo "📊 Space saved:"
echo "├── Removed public/Images"
echo "├── Removed public/Team"
echo "└── Backups preserved in backup/local-images/"
echo ""
echo "🔗 Images now served from Supabase CDN:"
echo "├── Faster load times (CDN edge caching)"
echo "├── Global distribution"
echo "└── Automatic optimization"
echo ""
echo "✅ All done!"
