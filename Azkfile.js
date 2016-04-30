/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */
// Adds the systems that shape your system
systems({
  "learn-angular": {
    // Dependent systems
    depends: ["backend"],
    // More images:  http://images.azk.io
    image: {"dockerfile": "./"},
    workdir: "/usr/share/nginx/html",
    shell: "/bin/bash",
    wait: 20,
    provision: [
      "bower install -f --allow-root --config.cwd='/usr/share/nginx/html'",
    ],
    ports: {
      http: "80/tcp",
    },
    mounts: {
      '/usr/share/nginx/html': path("."),
    },
    http: {
      domains: ["#{system.name}.#{azk.default_domain}"],
    },
  },
  backend: {
    image: {docker: 'node:6'},
    workdir: "/usr/src/app",
    shell: "/bin/bash",
    wait: 20,
    command: ["node", "yellowPages.js"],
    provision: [
      "npm install --prefix /usr/src/app",
    ],
    ports: {
      http: "32780:3412/tcp",
    },
    mounts: {
      '/usr/src/app': path("./backend"),
    },
    http: {
      domains: ["#{system.name}.#{azk.default_domain}"],
    },
    envs: {
      BACKEND_HOST: "172.17.0.1",
      BACKEND_PORT: "#{net.port.http}",
    },
    export_envs: {
      BACKEND_HOST: "172.17.0.1",
      BACKEND_PORT: "#{net.port.http}",
    },
  },
});
