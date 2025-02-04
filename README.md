# mov2mov
## Convert videos to AI-generated videos using Stable Diffusion

![stable-diffusion-webui-mov2mov-extension](https://www.davg25.com/file/github-media/sd-webui-mov2mov/preview1.png)

This extension for [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) is a fork of [mov2mov](https://github.com/Scholar01/sd-webui-mov2mov) with added features, bug fixes, improvements, and translated to English


### Main features
- Frame-by-frame processing
- ControlNet and MODNet support
- Automatic video generation
- Pre-processing and post-processing features
- Ability to process prompts individually for each frame

### Fork features
- Use of the OpenH264 library is dropped in favor of imageio, no longer requiring the libopenh264 codec
- The necessary MODNet models are automatically downloaded and ready to use
- Invalid or errored images no longer stop the entire video generation
- General QoL improvements and bug fixes to the UI and scripts

Eventual updates from the origin repository will be added as time allows, changes will be merged upstream via pull requests when possible

<br>

## Installation

If using a different fork of mov2mov, delete the previous mov2mov extension folder before following these steps

1. Start the SD Web UI and go to the `Extensions` tab
2. Click `Install from URL`
3. Enter the URL `https://github.com/DavG25/sd-webui-mov2mov`
4. Click `Install`
5. Once the installation has finished, completely restart the SD Web UI (close it and launch it again)

<br>

## Tutorials
- Wiki
  - https://github.com/DavG25/sd-webui-mov2mov/wiki
- Videos (in Chinese)：
  - https://www.bilibili.com/video/BV1Mo4y1a7DF
  - https://www.bilibili.com/video/BV1rY4y1C7Q5

<br>

## Credits

- Mov2mov: https://github.com/Scholar01/sd-webui-mov2mov
- MODNet-entry: https://github.com/RimoChan/modnet-entry
- MODNet: https://github.com/ZHKKKe/MODNet
