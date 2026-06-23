enum Gender {
    female = 0,
    male = 1,
}

export interface BigPicture {
    name: string;
    role: string;
    location: string;
    imageUrl: string;
    gender: Gender;
    defaultImage: string;
    profession: string;
    message: string;
    LinkedIn : string;
}
