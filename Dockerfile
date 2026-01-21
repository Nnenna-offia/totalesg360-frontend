FROM node:20 AS build

WORKDIR /app

COPY ./package*.json ./

RUN npm install

RUN npm install -g vite

COPY . .

# Accept VITE_API_URL at build time so Vite can pick it up during `npm run build`
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN npm run build

FROM node:20-alpine

WORKDIR /app

# Install a simple HTTP server to serve static files
RUN npm install -g serve

# Copy built app from builder
COPY --from=build /app/dist ./dist

# Expose port (will be mapped by docker-compose)
EXPOSE 3000

# Serve the React app
CMD ["serve", "-s", "dist", "-l", "3000"]