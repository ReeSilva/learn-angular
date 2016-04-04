/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */
// Adds the systems that shape your system
systems({
  "learn-angular": {
    // Dependent systems
    depends: [],
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
});
