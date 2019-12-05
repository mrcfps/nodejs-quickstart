function getCurrentTime() {
  const time = new Date();
  return time.toLocaleString();
}

exports.getCurrentTime = getCurrentTime;
