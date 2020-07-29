import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for notes
 */
const ServerScheme = new Schema({
    title: {
        type: String,
        required: "Server Name"
    },
    invite: {
        type: String,
        required: "Invite URL"
    },
    tags: {
        type: [String],
    },
    description: {
        type: String,
        required: "Description of Server"
        
    }
});

export default mongoose.model('Server', ServerScheme);