import rateLimit from "express-rate-limit";

export const Limiter = rateLimit({
    windowsMs : 60* 1000,
    max: 3,
    message : "Only 3 requests per person"

});