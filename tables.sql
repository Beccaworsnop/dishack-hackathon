-- Users table (Donors & Hospitals in one, distinguished by 'role')
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    address TEXT NOT NULL,
    blood_type TEXT CHECK (blood_type IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
    role TEXT CHECK (role IN ('donor', 'hospital')) NOT NULL,
    points INTEGER DEFAULT 0
);

-- Hospitals table (Extra details for hospital accounts)
CREATE TABLE hospitals (
    id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    hospital_name TEXT NOT NULL,
    subscription_plan TEXT CHECK (subscription_plan IN ('basic', 'premium', 'vip')) NOT NULL,
    subscription_expiry DATE NOT NULL
);

-- Blood Requests table (Hospitals requesting blood donations)
CREATE TABLE blood_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hospital_id UUID REFERENCES users(id) ON DELETE CASCADE,
    blood_type_needed TEXT CHECK (blood_type_needed IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')) NOT NULL,
    urgency_level TEXT CHECK (urgency_level IN ('low', 'medium', 'high')) NOT NULL,
    status TEXT CHECK (status IN ('open', 'fulfilled', 'closed')) DEFAULT 'open',
    created_at TIMESTAMP DEFAULT NOW()
);

-- Donations table (Tracking who helped and points earned)
CREATE TABLE donations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    donor_id UUID REFERENCES users(id) ON DELETE CASCADE,
    hospital_id UUID REFERENCES users(id) ON DELETE CASCADE,
    blood_request_id UUID REFERENCES blood_requests(id) ON DELETE CASCADE,
    status TEXT CHECK (status IN ('pending', 'confirmed')) DEFAULT 'pending',
    points_awarded INTEGER DEFAULT 10,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Rewards table (Point-based services for donors)
CREATE TABLE rewards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    points_required INTEGER NOT NULL CHECK (points_required > 0)
);
