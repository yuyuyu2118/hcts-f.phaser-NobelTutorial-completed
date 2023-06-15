export class TitleScene extends Phaser.Scene {
  constructor() {
    super("title");
  }

  create() {
    const { width, height } = this.game.canvas;

    this.add.image(width / 2, height / 2, "logo").setScale(1/4);
    this.add.text(width / 2, height / 2, 'TypingRPG', {
      fontFamily: 'Arial',
      fontSize: '120px',
      fontStyle: 'bold',
      backgroundColor: '#000000'
    }).setOrigin(0.5);

    // 画面を埋めるようなZoneを作成
    const zone = this.add.zone(width / 2, height / 2, width, height);

    // Zoneをクリックできるように設定
    zone.setInteractive({
      useHandCursor: true, // マウスオーバーでカーソルが指マークになる
    });

    // ZoneをクリックしたらMainSceneに遷移
    zone.on("pointerdown", () => {
      this.scene.start("main", { timelineID: "start" });
    });
  }
}