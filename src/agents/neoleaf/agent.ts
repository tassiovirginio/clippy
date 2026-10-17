// Frame coordinates helper (6x4 grid of 128x128 frames):
// Row 0 (y=0):   [0,0]=Neutral, [128,0]=BlinkHalf, [256,0]=BlinkFull, [384,0]=Wink, [512,0]=LookLeft, [640,0]=LookRight
// Row 1 (y=128): [0,128]=LookUp, [128,128]=LookDown, [256,128]=WaveLeft, [384,128]=WaveRight, [512,128]=Squash, [640,128]=JumpMid
// Row 2 (y=256): [0,256]=JumpPeakHappy, [128,256]=TalkClosed, [256,256]=TalkOoh, [384,256]=Thinking, [512,256]=Alert, [640,256]=Sparkles1
// Row 3 (y=384): [0,384]=Sparkles2, [128,384]=Tiny, [256,384]=Medium, [384,384]=Overshoot, [512,384]=MoveLeft, [640,384]=MoveRight

export default {
  overlayCount: 1,
  sounds: ["1", "2", "3", "4", "5"],
  framesize: [128, 128],
  tts: { rate: 1.05, pitch: 1.2, voice: "Google US English" },
  animations: {
    Show: {
      frames: [
        { duration: 80, images: [[128, 384]], sound: "1" },
        { duration: 90, images: [[256, 384]] },
        { duration: 100, images: [[384, 384]] },
        { duration: 90, images: [[512, 128]] },
        { duration: 120, images: [[0, 0]] },
      ],
    },
    Hide: {
      frames: [
        { duration: 80, images: [[384, 384]], sound: "2" },
        { duration: 90, images: [[256, 384]] },
        { duration: 90, images: [[128, 384]] },
        { duration: 80, images: [] },
      ],
    },
    RestPose: {
      frames: [{ duration: 100, images: [[0, 0]] }],
    },
    ClickedOn: {
      frames: [
        { duration: 90, images: [[512, 128]], sound: "3" },
        { duration: 110, images: [[640, 128]] },
        { duration: 180, images: [[0, 256]] },
        { duration: 150, images: [[384, 0]] },
        { duration: 150, images: [[256, 128]] },
        { duration: 150, images: [[384, 128]] },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Greeting: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "1" },
        { duration: 140, images: [[256, 128]] },
        { duration: 140, images: [[384, 128]] },
        { duration: 140, images: [[256, 128]] },
        { duration: 140, images: [[384, 128]] },
        { duration: 180, images: [[384, 0]] },
        { duration: 120, images: [[0, 0]] },
      ],
    },
    Wave: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "4" },
        { duration: 130, images: [[256, 128]] },
        { duration: 130, images: [[384, 128]] },
        { duration: 130, images: [[256, 128]] },
        { duration: 130, images: [[384, 128]] },
        { duration: 130, images: [[256, 128]] },
        { duration: 120, images: [[0, 0]] },
      ],
    },
    Congratulate: {
      frames: [
        { duration: 90, images: [[512, 128]], sound: "5" },
        { duration: 110, images: [[640, 128]] },
        { duration: 160, images: [[0, 256]] },
        { duration: 180, images: [[640, 256]] },
        { duration: 180, images: [[0, 384]] },
        { duration: 180, images: [[640, 256]] },
        { duration: 180, images: [[0, 384]] },
        { duration: 100, images: [[512, 128]] },
        { duration: 120, images: [[0, 0]] },
      ],
    },
    Pleased: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 150, images: [[640, 256]], sound: "4" },
        { duration: 180, images: [[0, 256]] },
        { duration: 180, images: [[384, 0]] },
        { duration: 120, images: [[0, 0]] },
      ],
    },
    Acknowledge: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 140, images: [[128, 128]], sound: "4" },
        { duration: 140, images: [[512, 128]] },
        { duration: 160, images: [[384, 0]] },
        { duration: 120, images: [[0, 0]] },
      ],
    },
    Explain: {
      frames: [
        { duration: 120, images: [[0, 0]] },
        { duration: 130, images: [[128, 256]] },
        { duration: 130, images: [[256, 128]] },
        { duration: 130, images: [[256, 256]] },
        { duration: 130, images: [[384, 128]] },
        { duration: 130, images: [[128, 256]] },
        { duration: 130, images: [[0, 0]] },
      ],
    },
    Thinking: {
      frames: [
        { duration: 120, images: [[0, 0]] },
        { duration: 250, images: [[0, 128]] },
        { duration: 400, images: [[384, 256]], sound: "4" },
        { duration: 400, images: [[0, 128]] },
        { duration: 400, images: [[384, 256]] },
        { duration: 150, images: [[0, 0]] },
      ],
    },
    Searching: {
      frames: [
        { duration: 120, images: [[0, 0]] },
        { duration: 220, images: [[512, 0]] },
        { duration: 220, images: [[640, 0]] },
        { duration: 220, images: [[0, 128]] },
        { duration: 300, images: [[384, 256]] },
        { duration: 180, images: [[512, 256]], sound: "3" },
        { duration: 120, images: [[0, 0]] },
      ],
    },
    Alert: {
      frames: [
        { duration: 80, images: [[512, 128]], sound: "3" },
        { duration: 180, images: [[512, 256]] },
        { duration: 140, images: [[640, 128]] },
        { duration: 220, images: [[512, 256]] },
        { duration: 120, images: [[0, 0]] },
      ],
    },
    LookLeft: {
      frames: [
        { duration: 100, images: [[0, 0]], exitBranch: 3 },
        { duration: 400, images: [[512, 0]], exitBranch: 2 },
        { duration: 120, images: [[512, 0]] },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookRight: {
      frames: [
        { duration: 100, images: [[0, 0]], exitBranch: 3 },
        { duration: 400, images: [[640, 0]], exitBranch: 2 },
        { duration: 120, images: [[640, 0]] },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookUp: {
      frames: [
        { duration: 100, images: [[0, 0]], exitBranch: 3 },
        { duration: 400, images: [[0, 128]], exitBranch: 2 },
        { duration: 120, images: [[0, 128]] },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookDown: {
      frames: [
        { duration: 100, images: [[0, 0]], exitBranch: 3 },
        { duration: 400, images: [[128, 128]], exitBranch: 2 },
        { duration: 120, images: [[128, 128]] },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    GestureLeft: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 180, images: [[256, 128]] },
        { duration: 260, images: [[512, 384]] },
        { duration: 180, images: [[512, 0]] },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    GestureRight: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 180, images: [[384, 128]] },
        { duration: 260, images: [[640, 384]] },
        { duration: 180, images: [[640, 0]] },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    GestureUp: {
      frames: [
        { duration: 100, images: [[512, 128]] },
        { duration: 200, images: [[640, 128]] },
        { duration: 260, images: [[0, 128]] },
        { duration: 120, images: [[0, 0]] },
      ],
    },
    GestureDown: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 220, images: [[128, 128]] },
        { duration: 200, images: [[512, 128]] },
        { duration: 120, images: [[0, 0]] },
      ],
    },
    MoveLeft: {
      frames: [
        { duration: 80, images: [[256, 128]], exitBranch: 2 },
        {
          duration: 120,
          images: [[512, 384]],
          exitBranch: 2,
          branching: { branches: [{ frameIndex: 3, weight: 100 }] },
        },
        { duration: 100, images: [[0, 0]], exitBranch: 3 },
        { duration: 0 },
      ],
      useExitBranching: true,
    },
    MoveRight: {
      frames: [
        { duration: 80, images: [[384, 128]], exitBranch: 2 },
        {
          duration: 120,
          images: [[640, 384]],
          exitBranch: 2,
          branching: { branches: [{ frameIndex: 3, weight: 100 }] },
        },
        { duration: 100, images: [[0, 0]], exitBranch: 3 },
        { duration: 0 },
      ],
      useExitBranching: true,
    },
    MoveUp: {
      frames: [
        { duration: 80, images: [[512, 128]], exitBranch: 2 },
        {
          duration: 120,
          images: [[640, 128]],
          exitBranch: 2,
          branching: { branches: [{ frameIndex: 3, weight: 100 }] },
        },
        { duration: 100, images: [[0, 0]], exitBranch: 3 },
        { duration: 0 },
      ],
      useExitBranching: true,
    },
    MoveDown: {
      frames: [
        { duration: 80, images: [[128, 128]], exitBranch: 2 },
        {
          duration: 120,
          images: [[512, 128]],
          exitBranch: 2,
          branching: { branches: [{ frameIndex: 3, weight: 100 }] },
        },
        { duration: 100, images: [[0, 0]], exitBranch: 3 },
        { duration: 0 },
      ],
      useExitBranching: true,
    },
    Idle1_1: {
      frames: [
        { duration: 1800, images: [[0, 0]], exitBranch: 4 },
        { duration: 70, images: [[128, 0]], exitBranch: 4 },
        { duration: 100, images: [[256, 0]], exitBranch: 4 },
        { duration: 70, images: [[128, 0]], exitBranch: 4 },
        { duration: 600, images: [[0, 0]] },
      ],
    },
    Idle1_2: {
      frames: [
        { duration: 1200, images: [[0, 0]], exitBranch: 5 },
        { duration: 400, images: [[512, 0]], exitBranch: 5 },
        { duration: 300, images: [[0, 0]], exitBranch: 5 },
        { duration: 400, images: [[640, 0]], exitBranch: 5 },
        { duration: 100, images: [[256, 0]], exitBranch: 5 },
        { duration: 500, images: [[0, 0]] },
      ],
    },
    Idle1_3: {
      frames: [
        { duration: 1000, images: [[0, 0]], exitBranch: 4 },
        { duration: 220, images: [[256, 128]], exitBranch: 4 },
        { duration: 220, images: [[384, 128]], exitBranch: 4 },
        { duration: 180, images: [[384, 0]], exitBranch: 4 },
        { duration: 500, images: [[0, 0]] },
      ],
    },
  },
};
