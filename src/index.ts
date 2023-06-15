import * as Phaser from 'phaser';
import { Scenes } from './scene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO, // webGLを使うかcanvasを使うかをphaserが自動で判断してくれる
  width: 1600,
  height: 900,
  parent: "game-app", // #game-app内にcanvasを生成
  //resolution: window.devicePixelRatio,
  scene: Scenes,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

new Phaser.Game(config);
