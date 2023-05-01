const config = {
  development: {
    backendUrl: "http://localhost:8080/api/v1/dalle",
  },
  production: {
    backendUrl: "https://project-three-js-emv3.onrender.com/api/v1/dalle",
  },
}

export default config[import.meta.env.MODE] ?? config.production
