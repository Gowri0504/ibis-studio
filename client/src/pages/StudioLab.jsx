import React from 'react';

const StudioLab = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Studio Lab</h1>
      <p className="text-lg text-center mb-12">If you really want a <strong>next-level studio website</strong>, you can add features that even many big studios don’t use yet. These ideas combine <strong>AI, automation, and immersive web technology</strong>. They make a project or startup website look very innovative and memorable.</p>

      <div className="space-y-16">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">1. AI Photoshoot Pose Assistant</h2>
            <p className="mb-4">An AI system suggests poses for the client during a photoshoot.</p>
            <h3 className="text-xl font-semibold mb-2">How it works</h3>
            <ol className="list-decimal list-inside mb-4">
              <li>Camera detects body posture.</li>
              <li>AI analyzes pose.</li>
              <li>Website/app suggests better pose ideas.</li>
            </ol>
            <h3 className="text-xl font-semibold mb-2">Example suggestions</h3>
            <ul className="list-disc list-inside mb-4">
              <li>“Turn shoulder slightly”</li>
              <li>“Tilt head a little”</li>
              <li>“Raise chin”</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Helps beginners pose naturally</li>
              <li>Improves photo quality</li>
              <li>Makes the studio feel high-tech</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Technology</h3>
            <ul className="list-disc list-inside">
              <li>MediaPipe Pose Detection</li>
              <li>OpenCV</li>
              <li>TensorFlow</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://editor.analyticsvidhya.com/uploads/49568Posture%20detection%20using%20Posenet%20Feature_img.png" alt="Pose Detection" className="rounded-lg shadow-lg" />
            <img src="https://cdn.soft112.com/pose-tool-3d/00/00/0F/RN/00000FRNUY/pad_screenshot_1N7H7M3Z3A.webp" alt="Pose Tool 3D" className="rounded-lg shadow-lg" />
            <img src="https://www.reallusion.com/accupose/includes/images/default/Trained-AI-Models_Core-Library_mobile.jpg" alt="AccuPose" className="rounded-lg shadow-lg" />
            <img src="https://resource.flexclip.com/pages/learn-center/change-pose-of-a-photo/change-photo-pose-example-image.webp" alt="Change Pose" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://1.img-dpreview.com/files/p/E~C328x0S844x844T1200x1200~articles/6029545790/Lifestyle1.jpeg" alt="AR Background Preview" className="rounded-lg shadow-lg" />
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20251231/pngtree-smartphone-screen-showing-augmented-reality-furniture-app-in-living-room-image_20960655.webp" alt="AR Furniture App" className="rounded-lg shadow-lg" />
            <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/12/92/3c/12923c27-1d0e-56a4-422c-862b146bc08b/Placeholder.mill/1200x630wa.jpg" alt="AR App Placeholder" className="rounded-lg shadow-lg" />
            <img src="https://petapixel.com/assets/uploads/2018/04/superba-ar_photostudio-1-800x528.jpg" alt="AR Photo Studio" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">2. Augmented Reality (AR) Background Preview</h2>
            <p className="mb-4">Users can preview <strong>different studio backgrounds using their phone camera</strong>.</p>
            <h3 className="text-xl font-semibold mb-2">Example</h3>
            <p className="mb-4">Customer opens website → camera opens → background changes to:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Beach</li>
              <li>Royal palace</li>
              <li>Garden</li>
              <li>Wedding stage</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Helps clients choose themes</li>
              <li>Makes booking exciting</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Technology</h3>
            <ul className="list-disc list-inside">
              <li>WebAR</li>
              <li>AR.js</li>
              <li>Three.js</li>
            </ul>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">3. AI Automatic Photo Selection</h2>
            <p className="mb-4">AI automatically selects the <strong>best photos from hundreds of shots</strong>.</p>
            <h3 className="text-xl font-semibold mb-2">How it works</h3>
            <p className="mb-4">AI checks:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Smile detection</li>
              <li>Eye blinking</li>
              <li>Sharpness</li>
              <li>Lighting</li>
            </ul>
            <p>Then it picks the <strong>top 20 photos</strong>.</p>
            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside">
              <li>Saves editing time</li>
              <li>Faster delivery to clients</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://cdn.mos.cms.futurecdn.net/rg4EHzNiEKiPiGxrwSgCT.jpg" alt="AI Photo Selection" className="rounded-lg shadow-lg" />
            <img src="https://proedu.com/cdn/shop/articles/Leveraging_AI_for_Efficient_Photo_Culling_and_Selection-_Streamlining_Your_Digital_Workflow.jpg?v=1732386674&width=2048" alt="AI Photo Culling" className="rounded-lg shadow-lg" />
            <img src="https://blog.laozhang.ai/posts/en/best-ai-image-model/img/cover.png" alt="AI Image Model" className="rounded-lg shadow-lg" />
            <img src="https://assets.awwwards.com/awards/sites_of_the_day/2023/03/the-ai-gallery-2.jpg" alt="AI Gallery" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Feature 4 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://cdn.shopify.com/s/files/1/0576/2341/2770/files/behind-the-scene-03-859x1024.jpg?v=1662462440" alt="Live Photoshoot Streaming" className="rounded-lg shadow-lg" />
            <img src="https://restream.io/blog/content/images/size/w1200/2021/09/how-to-set-up-home-live-streaming-studio-tw-fb.jpeg" alt="Live Streaming Setup" className="rounded-lg shadow-lg" />
            <img src="https://cdn11.bigcommerce.com/s-jw7ypwsfet/images/stencil/500x659/products/935/3003/UQ31-6_Resized__01685.1762477766.jpg?c=1" alt="Streaming Equipment" className="rounded-lg shadow-lg" />
            <img src="https://shop11058.sfstatic.io/upload_dir/shop/_thumbs/ATEM156-CO.w250.h250.fill.webp" alt="ATEM Mini" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">4. Live Photoshoot Streaming</h2>
            <p className="mb-4">Clients can <strong>watch their photoshoot live from the website</strong>.</p>
            <h3 className="text-xl font-semibold mb-2">Example</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Wedding shoot</li>
              <li>Fashion shoot</li>
              <li>Baby shoot</li>
            </ul>
            <p>Family members in other cities can watch.</p>
            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside">
              <li>Unique experience</li>
              <li>Emotional connection</li>
            </ul>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">5. AI Mood Board Generator</h2>
            <p className="mb-4">Clients describe their idea and AI creates a <strong>photoshoot concept board</strong>.</p>
            <h3 className="text-xl font-semibold mb-2">Example input</h3>
            <p className="mb-4">“Outdoor sunset couple shoot”</p>
            <h3 className="text-xl font-semibold mb-2">AI generates</h3>
            <ul className="list-disc list-inside">
              <li>Pose ideas</li>
              <li>Color themes</li>
              <li>Lighting style</li>
              <li>Background ideas</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://www.befunky.com/images/wp/wp-2017-10-Mood-Board-Final.png?auto=avif%2Cwebp&format=jpg&width=944" alt="Mood Board" className="rounded-lg shadow-lg" />
            <img src="https://content-management-files.canva.com/3d7c4a26-384b-4ada-8d74-f2eb2bc45e0f/11HowtomakeamoodboardCanva.png" alt="Canva Mood Board" className="rounded-lg shadow-lg" />
            <img src="https://storage.googleapis.com/moodly-16ff8.appspot.com/ai-generator/1y177tz0asrmc0cn64wbcy1a9m.jpg" alt="AI Generated Mood Board 1" className="rounded-lg shadow-lg" />
            <img src="https://storage.googleapis.com/moodly-16ff8.appspot.com/ai-generator/xnxgjwh95nrmc0cq8nj9rmks70.jpg" alt="AI Generated Mood Board 2" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Feature 6 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width%3D600/uploads/users/220/posts/23285/image/lighting01_lightdiagrams.jpg" alt="Lighting Diagrams" className="rounded-lg shadow-lg" />
            <img src="https://petapixel.com/assets/uploads/2013/05/virtualstudio.jpg" alt="Virtual Studio" className="rounded-lg shadow-lg" />
            <img src="https://www.ppa.com/images/jcogs_img/cache/202209_elixxier_setalight3d-share_-_28de80_-_6138dcbf8a84eba15481d38604a9aeb0003b3377.jpg" alt="Set a Light 3D" className="rounded-lg shadow-lg" />
            <img src="https://www.ppa.com/assets/images/ppmag_articles/202209_setalight_customize-room.jpg" alt="Customize Room" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">6. Smart Lighting Simulator</h2>
            <p className="mb-4">Clients can see how lighting changes the photo before the shoot.</p>
            <h3 className="text-xl font-semibold mb-2">User moves lights in the simulator</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Soft light</li>
              <li>Hard light</li>
              <li>Cinematic light</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside">
              <li>Educates clients</li>
              <li>Improves planning</li>
            </ul>
          </div>
        </div>

        {/* Feature 7 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">7. AI Outfit Recommendation for Photoshoot</h2>
            <p className="mb-4">User uploads photo → AI suggests <strong>best outfit colors and styles</strong>.</p>
            <h3 className="text-xl font-semibold mb-2">Example suggestions</h3>
            <ul className="list-disc list-inside">
              <li>“Wear pastel colors for outdoor shoot”</li>
              <li>“Avoid bright red under studio lights”</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://cdn.prod.website-files.com/6694273bb21641a367ef0285/681b2c331994a98bc72f06b0_fits-stylist.jpg" alt="Fits Stylist" className="rounded-lg shadow-lg" />
            <img src="https://cdn.prod.website-files.com/6694273bb21641a367ef0285/681f8027e5524b061341d50c_fits-wardrobe-app.jpg" alt="Fits Wardrobe App" className="rounded-lg shadow-lg" />
            <img src="https://cdn.dribbble.com/userupload/45705993/file/7e8505050c9f736af92d2f7f0b08af04.png?format=webp&resize=400x300&vertical=center" alt="Outfit Recommendation App" className="rounded-lg shadow-lg" />
            <img src="https://alhena.ai/blog/content/images/2026/01/1-ecom-ui.png" alt="E-commerce UI" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Feature 8 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://easy-peasy.ai/_next/image?dpl=dpl_G9WUaAy63kxtWwM2oAcFTZuFDYAP&q=75&url=https%3A%2F%2Fmedia.easy-peasy.ai%2F498c5b21-8c77-4294-844b-0c2770d658ec%2F8390548d-509a-460d-9cb6-41cff31fb786.png&w=828" alt="Time-Travel Photo Effect" className="rounded-lg shadow-lg" />
            <img src="https://createvision.ai/_next/image?q=80&url=https%3A%2F%2Fpub-1376ac4a4a844fd5a7a29c8666f4560e.r2.dev%2Fstatic%2Fexamples%2Fai-time-travel-photo%2Fscenes%2Fvictorian-after.jpg&w=1920" alt="Victorian Photo Effect" className="rounded-lg shadow-lg" />
            <img src="https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/fc3ccc72-4c89-41c0-a398-3caa8b040a53.png" alt="AI Time Travel" className="rounded-lg shadow-lg" />
            <img src="https://www.photomaticai.com/images/processed/ai-generated-images/models_ideogram-v2-turbo_ai-image-generator_renais_Noblewoman_in_Renaissance_Fashion.webp" alt="Renaissance Photo" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">8. Time-Travel Photo Effect Generator</h2>
            <p className="mb-4">AI converts a modern photo into <strong>different historical styles</strong>.</p>
            <h3 className="text-xl font-semibold mb-2">Examples</h3>
            <ul className="list-disc list-inside mb-4">
              <li>1920 vintage photo</li>
              <li>royal king portrait</li>
              <li>ancient warrior style</li>
            </ul>
            <p>This becomes a <strong>viral feature for social media sharing</strong>.</p>
          </div>
        </div>

        {/* Feature 9 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">9. Interactive Storytelling Gallery</h2>
            <p className="mb-4">Photos appear with <strong>scroll animations telling a story</strong>.</p>
            <h3 className="text-xl font-semibold mb-2">Example for wedding</h3>
            <ol className="list-decimal list-inside mb-4">
              <li>Engagement</li>
              <li>Ceremony</li>
              <li>Couple shoot</li>
              <li>Celebration</li>
            </ol>
            <p>Feels like watching a <strong>movie story</strong>.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://cdn.vev.design/cdn-cgi/image/f%3Dauto%2Cq%3D82/private/F5oY9xDoGodNLVtMTdVGd8LPt602/image/o51rJYkxzH.jpg" alt="Interactive Storytelling" className="rounded-lg shadow-lg" />
            <img src="https://s3-alpha.figma.com/hub/file/2308464794730538474/8e27d017-4dcf-44ff-ae53-7bac3e4f7b5c-cover.png" alt="Storytelling Gallery" className="rounded-lg shadow-lg" />
            <img src="https://i.etsystatic.com/55137376/r/il/fe38f9/7195208941/il_340x270.7195208941_18x6.jpg" alt="Wedding Story" className="rounded-lg shadow-lg" />
            <img src="https://cdn.dribbble.com/userupload/44564596/file/37874373f592e427104a22cba0586563.png?resize=752x&vertical=center" alt="Gallery Animation" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Feature 10 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-024-79146-z/MediaObjects/41598_2024_79146_Fig33_HTML.png" alt="Emotion Detection" className="rounded-lg shadow-lg" />
            <img src="https://ars.els-cdn.com/content/image/1-s2.0-S0160791X24000149-fx1.jpg" alt="Emotion Analysis" className="rounded-lg shadow-lg" />
            <img src="https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41467-023-44673-2/MediaObjects/41467_2023_44673_Fig1_HTML.png" alt="AI Emotion Recognition" className="rounded-lg shadow-lg" />
            <img src="https://cdn.prod.website-files.com/624ac40503a5277051af4162/62b087c1b056d31563e9b632_Ready%20Face%20Detection%20%20System%20%281%29.png" alt="Face Detection System" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">10. AI Emotion Detection Feedback</h2>
            <p className="mb-4">AI detects emotions in photos.</p>
            <h3 className="text-xl font-semibold mb-2">Example results</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Happiness score</li>
              <li>Natural smile</li>
              <li>Confidence level</li>
            </ul>
            <p>This helps photographers pick <strong>the most expressive images</strong>.</p>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default StudioLab;
