import { execSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import { mkdirSync } from 'fs';

mkdirSync('frames', { recursive: true });

// Extract 1 frame per second
const cmd = `"${ffmpegPath}" -i "C:\\Users\\maxam\\Desktop\\Download.mp4" -vf "fps=1" -q:v 2 "frames/frame_%03d.jpg" -y`;
try {
  const out = execSync(cmd, { encoding: 'utf-8', timeout: 30000 });
  console.log(out);
} catch (e) {
  console.log(e.stdout || '');
  console.error(e.stderr || e.message);
}

// Also get video info
try {
  const info = execSync(`"${ffmpegPath}" -i "C:\\Users\\maxam\\Desktop\\Download.mp4" 2>&1`, { encoding: 'utf-8', timeout: 10000 });
  console.log(info);
} catch (e) {
  console.log(e.stderr || e.stdout || e.message);
}
