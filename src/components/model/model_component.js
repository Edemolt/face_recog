import React, { useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const model = tf.loadLayersModel('../../../facetracker_tfjs/model.json');

const ModelComponent = () => {
  useEffect(() => {
    const loadModel = async () => {
        // const model = await tf.loadLayersModel('../../../facetracker_tfjs/model.json');
        console.log('Model loaded successfully');
      // Use the model for predictions here
    };
    loadModel();
  }, []);

  return <div>Your component</div>;
};

export default ModelComponent;
