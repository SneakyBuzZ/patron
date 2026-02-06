// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/access/Ownable.sol";

contract SimpleDAO is Ownable {

    /* ========== STRUCTS ========== */

    struct Proposal {
        string title;
        string description;
        uint256 deadline;
        uint256 forVotes;
        uint256 againstVotes;
        bool executed;
    }

    /* ========== STATE ========== */

    uint256 public totalVotingTokens;
    uint256 public proposalCount;

    // voting power per address
    mapping(address => uint256) public votingPower;

    // proposal storage
    mapping(uint256 => Proposal) public proposals;

    // proposal -> voter -> voted?
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    /* ========== EVENTS ========== */

    event ProposalCreated(uint256 proposalId);
    event VoteCast(
        uint256 proposalId,
        address voter,
        bool support,
        uint256 weight
    );

    /* ========== CONSTRUCTOR ========== */

    constructor(uint256 _initialTokens) Ownable(msg.sender) {
        totalVotingTokens = _initialTokens;

        // creator initially owns all voting power
        votingPower[msg.sender] = _initialTokens;
    }

    /* ========== TOKEN DISTRIBUTION ========== */

    function distributeVotingPower(
        address user,
        uint256 amount
    ) external onlyOwner {
        require(
            votingPower[msg.sender] >= amount,
            "Not enough tokens"
        );

        votingPower[msg.sender] -= amount;
        votingPower[user] += amount;
    }

    /* ========== PROPOSALS ========== */

    function createProposal(
        string memory title,
        string memory description,
        uint256 durationSeconds
    ) external returns (uint256) {
        require(
            votingPower[msg.sender] > 0,
            "No voting power"
        );

        proposalCount++;

        proposals[proposalCount] = Proposal({
            title: title,
            description: description,
            deadline: block.timestamp + durationSeconds,
            forVotes: 0,
            againstVotes: 0,
            executed: false
        });

        emit ProposalCreated(proposalCount);
        return proposalCount;
    }

    /* ========== VOTING ========== */

    function vote(
        uint256 proposalId,
        bool support
    ) external {
        Proposal storage proposal = proposals[proposalId];

        require(
            block.timestamp < proposal.deadline,
            "Voting ended"
        );

        require(
            votingPower[msg.sender] > 0,
            "No voting power"
        );

        require(
            !hasVoted[proposalId][msg.sender],
            "Already voted"
        );

        uint256 weight = votingPower[msg.sender];

        if (support) {
            proposal.forVotes += weight;
        } else {
            proposal.againstVotes += weight;
        }

        hasVoted[proposalId][msg.sender] = true;

        emit VoteCast(
            proposalId,
            msg.sender,
            support,
            weight
        );
    }

    /* ========== VIEW RESULT ========== */

    function proposalResult(
        uint256 proposalId
    ) external view returns (string memory) {
        Proposal storage p = proposals[proposalId];

        require(
            block.timestamp >= p.deadline,
            "Voting still active"
        );

        if (p.forVotes > p.againstVotes) {
            return "PASSED";
        } else {
            return "REJECTED";
        }
    }
}
