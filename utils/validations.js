// validation function
export const name = name => {
    if (!name.length) {
        return { valid: false, error: "This field is required." };
    }
    if (name.length < 3) {
        return { valid: false, error: "Name is too short." };
    }
    return { valid: true, error: null };
};

export const email = email => {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.length) {
        return { valid: false, error: "This field is required." };
    }
    if (!email.match(mailformat)) {
        return { valid: false, error: "Please, enter a valid email." };
    }
    return { valid: true, error: null };
};

export const phone = phone => {
    if (!phone.length) {
        return { valid: false, error: "This field is required." };
    }

    if (
        !phone.match(/^\d{10}$/)
    ) {
        return {
            valid: false,
            error: "Please, enter a valid phone number."
        };
    }

    return { valid: true, error: null };
};

export const message = message => {
    if (!message.length) {
        return { valid: false, error: "This field is required." };
    }
    if (message.length < 40) {
        return { valid: false, error: "Message is too short." };
    }
    return { valid: true, error: null };
};
