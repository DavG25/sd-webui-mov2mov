function submit_mov2mov(...args) {
  rememberGallerySelection('mov2mov_gallery');
  showSubmitButtons('mov2mov', false);
  showResultVideo('mov2mov', false);

  const id = randomId();
  requestProgress(id, gradioApp().getElementById('mov2mov_gallery_container'), gradioApp().getElementById('mov2mov_gallery'), () => {
    showSubmitButtons('mov2mov', true);
    showResultVideo('mov2mov', true);
  });

  const res = create_submit_args(args);
  res[0] = id;
  return res;
}

function showResultVideo(tabname, show) {
  gradioApp().getElementById(`${tabname}_video`).style.display = show ? 'block' : 'none';
  gradioApp().getElementById(`${tabname}_gallery`).style.display = show ? 'none' : 'block';
}

function showModnetModels(...args) {
  const check = args[0];
  gradioApp().getElementById('mov2mov_modnet_model').style.display = check ? 'block' : 'none';
  gradioApp().getElementById('mov2mov_merge_background').style.display = check ? 'block' : 'none';
  return [];
}

function switchModnetMode(...args) {
  const mode = args[0];

  if (mode === 'Image') {
    gradioApp().getElementById('modnet_background_movie').style.display = 'none';
    gradioApp().getElementById('modnet_background_image').style.display = 'block';
  } else if (mode === 'Video') {
    gradioApp().getElementById('modnet_background_image').style.display = 'none';
    gradioApp().getElementById('modnet_background_movie').style.display = 'block';
  } else {
    gradioApp().getElementById('modnet_background_movie').style.display = 'none';
    gradioApp().getElementById('modnet_background_image').style.display = 'none';
  }

  return [];
}

function copy_from(type) {
  return [];
}
