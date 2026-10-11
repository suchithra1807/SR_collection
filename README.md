# SR Collection — Demo Storefront

A React + TypeScript + Vite boutique storefront and seller dashboard. This version runs **without Supabase**. Product edits, categories, cart, wishlist, and demo account state are stored locally in your browser.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The storefront is at `/` and the demo seller dashboard is at `/admin`. For demo admin access, enter any email and password.

## Show your Cloudinary photos

Cloudinary delivery URLs are public image URLs and can be rendered directly in the browser. Copy the **Secure URL** for each image from Cloudinary Media Library and add them to `.env.local`:

```env
VITE_CLOUDINARY_DEMO_IMAGES=https://res.cloudinary.com/YOUR_CLOUD/image/upload/v1234567890/dress1.jpg,https://res.cloudinary.com/YOUR_CLOUD/image/upload/v1234567890/dress2.jpg
```

Separate URLs with commas or new lines, then restart `npm run dev`. The Admin → Image Library page will display these photos so you can assign them to demo products or create demo products. Do not put your Cloudinary API secret in a `VITE_` variable.

**Important:** Cloudinary's API does not allow a browser-only app to list every image in a folder securely without server-side authentication. This demo uses the delivery URLs you provide; it does not call Supabase or automatically enumerate the Cloudinary account.

## Demo behavior

- No Supabase URL/key or database setup is needed.
- Product create/edit/delete and category changes persist in localStorage on this browser only.
- Demo admin access is not secure and is for preview purposes only.
- Checkout and account flows are demonstrations, not real payments or order processing.


## SR Collection photo update

The supplied product-photo archive is included locally in `public/catalog/` as `photo-001.jpeg` through `photo-100.jpeg`.
The storefront now uses real supplied photos for product cards and materials, includes a fabric-print gallery, and shows the supplied design-reference sheets on the homepage. These bundled images display without Cloudinary configuration. Cloudinary admin/API functionality can still be configured separately.
