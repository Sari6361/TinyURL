import linkModel from "../models/linkModel.js";

const RedirectController = {
    redirect: async (req, res) => {
        const { url } = req.params;
        const ipAddress = req.ip;

        try {
            const link = await linkModel.findById(url);

            link.click.push({
                insertedAt: Date.now(),
                ipAddress: ipAddress
            });

            
            if (link.targetName && req.query[link.targetName]) {
                const targetName = req.query[link.targetName];
                const target = link.targetValues.find(target => target.name === targetName);
                if (target) {
                    target.value += 1;
                }
            }

            await link.save();
    
            res.redirect(link.originalURL);

        }
        catch (e) {
            res.status(400).json({ message: e.message });
        }

    }

}

export default RedirectController;