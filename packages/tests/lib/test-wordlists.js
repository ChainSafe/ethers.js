'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var ethers_1 = require("ethers");
var testcases_1 = require("@ethersproject/testcases");
function checkWordlist(content, wordlist) {
    var words = content.split('\n');
    it('matches wordlists for ' + wordlist.locale, function () {
        for (var i = 0; i < 2048; i++) {
            var actual = wordlist.getWord(i);
            var expected = words[i];
            assert_1.default.equal(actual, expected, 'failed to match word ' + i + ': ' + words[i] + ' !=' + wordlist.getWord(i));
        }
    });
}
describe('Check Wordlists', function () {
    var tests = testcases_1.loadTests("wordlists");
    tests.forEach(function (test) {
        var wordlist = (ethers_1.ethers.wordlists)[test.locale];
        checkWordlist(test.content, wordlist);
    });
});
