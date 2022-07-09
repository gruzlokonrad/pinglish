module.exports = {
  apps: [
    {
      name: "pinglish:3000",
      script: "npm",
      args: "start",
      exec_mode: "cluster",
      instances: -1,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
