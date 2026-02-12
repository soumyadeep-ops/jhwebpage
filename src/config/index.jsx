const BUILD_ENV = "jhProduction";

const ALL_CONFIG = {
    jhStaging: {
        name: "JH Staging",
        apiBaseURL: "https://stagingapi.mrsziplyneweb.hosts.jhmi.edu/api/v2",
        snippetURL: "https://cdn.mrsziplyneweb.hosts.jhmi.edu/scripts/snippet/JHstaging.js",
    },
    jhProduction: {
        name: "JH Production",
        apiBaseURL: "https://api.mrmpzipweb01.hosts.jhmi.edu/api/v2",
        snippetURL: "https://cdn.mrmpzipweb01.hosts.jhmi.edu/scripts/snippet/JHprod.js",
    }
}

const getConfig = () => {
    return ALL_CONFIG[BUILD_ENV];
}

export default getConfig();