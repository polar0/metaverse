import { AnimationMixer } from 'three';

// FOR MODELS WITHOUT EMBEEDED ANIMATION
function setupModel(data) {
  const model = data.scene.children[0];

  // ANIMATIONS
  if (data.animations[0] !== undefined) {
    // extracting the animation clip from the data
    const clip = data.animations[0];
    // creating a mixer to pass the model into the constructor
    const mixer = new AnimationMixer(model);
    // creating the action, passing in the clip, then sending it immediately to playing
    const action = mixer.clipAction(clip);
    action.play();
    // adding a tick method to update the animation in the loop
    // calling mixer.update each frame, giving delta (amout of time previous frame took to render) : keep in sync the animation
    model.tick = (delta) => mixer.update(delta);
  }

  return model;
}

export { setupModel };
