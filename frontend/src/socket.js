"use client";

import { io } from "socket.io-client";

export const socket = io.connect("http://localhost:4001")