# Supabase Storage Setup Guide

## Step 1: Create Storage Buckets in Supabase Dashboard

1. Go to your Supabase project dashboard: https://supabase.com/dashboard/project/xvdznzsozebtzqsczked
2. Navigate to **Storage** in the left sidebar
3. Create the following buckets:

### Bucket 1: `blog-images`
- Name: `blog-images`
- Public: ✅ Yes
- File size limit: 10MB
- Allowed MIME types: `image/*`

### Bucket 2: `gallery`
- Name: `gallery`
- Public: ✅ Yes
- File size limit: 10MB
- Allowed MIME types: `image/*`

### Bucket 3: `images`
- Name: `images`
- Public: ✅ Yes
- File size limit: 10MB
- Allowed MIME types: `image/*`

## Step 2: Set Storage Policies

For each bucket, create the following policies:

### Policy Name: `Enable read access for all users`
```sql
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'bucket-name');
```

### Policy Name: `Enable insert for authenticated users only`
```sql
CREATE POLICY "Authenticated users can upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'bucket-name');
```

Replace `bucket-name` with each of: `blog-images`, `gallery`, `images`

## Step 3: Run Upload Script

After creating the buckets in the dashboard, run:

```bash
node scripts/upload-images.js
```

## Directory Structure in Supabase Storage

```
blog-images/
├── b1.webp
├── b2.webp
├── ...
└── b31.webp

gallery/
└── NAI GALLERY/
    ├── Students/
    │   ├── Aayushma Koirala.webp
    │   ├── Abhay Sharma.webp
    │   └── ...
    ├── nurseassistinternational001.jpg
    ├── nurseassistinternational002.jpg
    └── ...

images/
├── ALLTECHZONE.webp
├── australia-nursing.webp
├── medication-safety.webp
└── ...
```

## Step 4: Update Code References

The upload script will automatically update all image references in your code to use Supabase Storage URLs.