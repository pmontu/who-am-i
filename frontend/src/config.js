const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT || 7071;
export const SERVER_BASE_PATH =
  process.env.NODE_ENV !== "production"
    ? "https://hari-student.azurewebsites.net"
    : `http://localhost:${DEV_SERVER_PORT}`;
