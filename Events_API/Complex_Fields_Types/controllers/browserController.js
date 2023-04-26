const Browser = require('../models/browser');

exports.getAllBrowserss = async (req, res) => {
    try {
      const Browsers = await Browser.find();
      res.status(200).json(Browsers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

exports.createBrowser = async (req, res) => {
    try {
        const browser = new Browser({
            user_agent: req.body.user_agent,
            content_language: req.body.content_language,
            accept_language: req.body.accept_language
        });
        const newBrowser = await browser.save();
        res.status(201).json(newBrowser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getBrowserById = async (req, res) => {
    try {
        const browser = await Browser.findById(req.params.id);
        if (browser == null) {
            return res.status(404).json({ message: 'Browser not found' });
        }
        res.json(browser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateBrowserById = async (req, res) => {
    try {
        const browser = await Browser.findById(req.params.id);
        if (browser == null) {
            return res.status(404).json({ message: 'Browser not found' });
        }
        browser.user_agent = req.body.user_agent || browser.user_agent;
        browser.content_language = req.body.content_language || browser.content_language;
        browser.accept_language = req.body.accept_language || browser.accept_language;
        const updatedBrowser = await browser.save();
        res.json(updatedBrowser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteBrowserById = async (req, res) => {
    try {
        const browser = await Browser.findById(req.params.id);
        if (browser == null) {
            return res.status(404).json({ message: 'Browser not found' });
        }
        await browser.remove();
        res.json({ message: 'Browser deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};